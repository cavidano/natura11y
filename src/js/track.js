export default class Track {

    // Private properties

    #trackList = document.querySelectorAll('.track');
    #scrollTimeout = null;  // Timeout to delay pagination update
    #isScrollingProgrammatically = false;  // Flag to track programmatic scrolling

    // Private methods

    #getVisiblePanels(trackElement) {
        const visiblePanels = parseInt(getComputedStyle(trackElement).getPropertyValue('--visible-panels'), 10) || 1;
        return visiblePanels;
    }

    #toggleControlsVisibility(trackElement, totalPages) {
        trackElement.classList.toggle('hide-controls', totalPages <= 1);
    }

    #generatePages(trackElement) {
        const trackPanels = trackElement.querySelector('.track__panels');
        const paginationContainer = trackElement.querySelector('.track__pagination');
        const visiblePanels = this.#getVisiblePanels(trackPanels);
        const trackId = trackElement.getAttribute('data-track-id');
        
        let pages = [];
        let currentPage = [];
        
        Array.from(trackPanels.children).forEach((panel, index) => {
            const panelId = `${trackId}-panel-${index}`;
            panel.setAttribute('id', panelId);
            currentPage.push(panel);
            if (currentPage.length === visiblePanels || index === trackPanels.children.length - 1) {
                pages.push(currentPage);
                currentPage = [];
            }
        });

        trackElement.pages = pages;
        trackElement.currentPageIndex = 0; // Initialize currentPageIndex for each track

        paginationContainer.innerHTML = pages.map((page, i) => `
            <li>
                <button
                    type="button"
                    class="track__pagination__item ${i === 0 ? 'active' : ''}"
                    data-page-index="${i}"
                    aria-label="Page ${i + 1}"
                    ${i === 0 ? 'aria-current="true"' : ''}
                ></button>
            </li>
        `).join('');

        this.#toggleControlsVisibility(trackElement, pages.length);

        // Ensure only panels on the first page are tabbable
        this.#updateTabIndexes(trackElement, 0);
    }

    #updatePagination(trackElement, activeIndex) {
        const paginationItems = trackElement.querySelectorAll('.track__pagination__item');
        paginationItems.forEach((item, index) => {
            item.classList.toggle('active', index === activeIndex);
            item.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
        });

        // Update the live region whenever pagination changes
        this.#updateLiveRegion(trackElement, activeIndex, trackElement.pages.length);

        // Update tabindex for all panels based on the current page
        this.#updateTabIndexes(trackElement, activeIndex);
    }

    #updateTabIndexes(trackElement, activeIndex) {
        trackElement.pages.forEach((page, pageIndex) => {
            page.forEach(panel => {
                const interactiveElement = panel.firstElementChild;
                if (interactiveElement) {
                    if (pageIndex === activeIndex) {
                        interactiveElement.removeAttribute('tabindex'); // Make panels on the current page tabbable
                    } else {
                        interactiveElement.setAttribute('tabindex', '-1'); // Make panels on other pages not tabbable
                    }
                }
            });
        });
    }

    #scrollToPage(trackElement, pageIndex) {
        const trackPanels = trackElement.querySelector('.track__panels');
        const targetPanel = trackElement.pages[pageIndex][0]; // First panel of the target page

        // Indicate that scrolling is being triggered programmatically
        this.#isScrollingProgrammatically = true;

        // Immediately update the track element's current page index
        trackElement.currentPageIndex = pageIndex;

        // Perform smooth scrolling
        trackPanels.scrollTo({
            left: targetPanel.offsetLeft,
            behavior: 'smooth'
        });

        // Debounce pagination update until scroll stops
        clearTimeout(this.#scrollTimeout);
        this.#scrollTimeout = setTimeout(() => {
            this.#updatePagination(trackElement, pageIndex);
            this.#isScrollingProgrammatically = false;  // Reset the flag after scroll completes
        }, 600);  // Adjust delay time as needed
    }

    #observePanels(trackElement) {
        const trackPanels = trackElement.querySelector('.track__panels');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.#isScrollingProgrammatically) {
                    const panelId = entry.target.id;

                    // Find the page that contains this panel
                    const pageIndex = trackElement.pages.findIndex(page =>
                        page.some(panel => panel.id === panelId)  // Check all panels in the page
                    );

                    if (pageIndex !== -1) {
                        trackElement.currentPageIndex = pageIndex; // Update internal index for this track
                        this.#updatePagination(trackElement, pageIndex);
                    }
                }
            });
        }, {
            root: trackPanels,
            threshold: 0.5 // Adjust threshold as needed
        });

        // Observe the first panel of each page
        trackElement.pages.forEach(page => {
            observer.observe(page[0]); // Observe only the first panel in each page
        });
    }

    #resetTrack(trackElement) {
        const trackPanels = trackElement.querySelector('.track__panels');
        const paginationContainer = trackElement.querySelector('.track__pagination');

        trackPanels.scrollLeft = 0;
        paginationContainer.innerHTML = '';

        trackElement.currentPageIndex = 0;  // Reset the page index for this track

        this.#generatePages(trackElement);
        this.#initLiveRegion(trackElement);
        this.#observePanels(trackElement); // Initialize the observer
    }

    #initEventListeners(trackElement) {


        // Previous button click event
        trackElement.querySelector('[data-track-prev]')?.addEventListener('click', () => {
            console.log(`Current Page Index == ${trackElement.currentPageIndex}`);
            if (trackElement.currentPageIndex > 0) {
                this.#scrollToPage(trackElement, trackElement.currentPageIndex - 1);
            } else {
                this.#scrollToPage(trackElement, trackElement.pages.length - 1); // Wrap around to last page
            }
        });

        // Next button click event
        trackElement.querySelector('[data-track-next]')?.addEventListener('click', () => {
            console.log(`Current Page Index == ${trackElement.currentPageIndex}`);
            if (trackElement.currentPageIndex < trackElement.pages.length - 1) {
                this.#scrollToPage(trackElement, trackElement.currentPageIndex + 1);
            } else {
                this.#scrollToPage(trackElement, 0); // Wrap around to first page
            }
        });
        
        // Pagination click event
        trackElement.querySelector('.track__pagination')?.addEventListener('click', (event) => {
            const target = event.target.closest('.track__pagination__item');
            if (target) {
                const pageIndex = parseInt(target.getAttribute('data-page-index'));
                this.#scrollToPage(trackElement, pageIndex);
            }
        });

        // Handle window resize events
        window.addEventListener('resize', () => {
            this.#resetTrack(trackElement);
        });
    }

    #initLiveRegion(trackElement) {
        let liveRegion = trackElement.querySelector('.liveregion');

        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.className = 'liveregion screen-reader-only';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            trackElement.appendChild(liveRegion);
        }
    }

    #updateLiveRegion(trackElement, activeIndex, totalPages) {
        const liveRegion = trackElement.querySelector('.liveregion');
        if (liveRegion) {
            liveRegion.textContent = `Page ${activeIndex + 1} of ${totalPages}`;
        }
    }

    // Public methods

    init() {
        this.#trackList.forEach((trackElement, trackIndex) => {
            trackElement.setAttribute('data-track-id', `track-${trackIndex}`);
            this.#resetTrack(trackElement);
            this.#initEventListeners(trackElement);
        });
    }

}