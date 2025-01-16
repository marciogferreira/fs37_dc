class DetailsScreen {
    render() {
        const template = `
            <div class="bg-white rounded-3xl shadow-lg w-[375px] h-[812px] overflow-hidden">
                ${this.renderHeader()}
                ${this.renderContent()}
                ${this.renderBottomNav()}
            </div>
        `;

        document.getElementById('details-screen').innerHTML = template;
    }

    renderHeader() {
        return `
            <div class="bg-blue-900 text-white p-6 pt-12">
                <div class="flex items-center gap-2 mb-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                    <span>London</span>
                </div>
                <p class="text-sm text-gray-300">Distance: 965.2 km</p>
            </div>
        `;
    }

    renderContent() {
        return `
            <div class="p-6">
                ${this.renderIncluded()}
                ${this.renderRatings()}
                ${this.renderGallery()}
            </div>
        `;
    }

    renderIncluded() {
        return `
            <h3 class="font-semibold mb-4">Included</h3>
            <div class="flex gap-4 mb-6">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                    </svg>
                </div>
            </div>
        `;
    }

    renderRatings() {
        return `
            <h3 class="font-semibold mb-4">Rating & Reviews</h3>
            <div class="flex items-center gap-2 mb-2">
                <div class="flex">
                    <svg class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                </div>
                <span class="text-lg font-semibold">4.8</span>
            </div>
            <div class="mb-6">
                <p class="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        `;
    }

    renderGallery() {
        return `
            <h3 class="font-semibold mb-4">Gallery</h3>
            <div class="grid grid-cols-3 gap-4">
                <div class="bg-gray-200 h-24 rounded-lg"></div>
                <div class="bg-gray-200 h-24 rounded-lg"></div>
                <div class="bg-gray-200 h-24 rounded-lg"></div>
            </div>
        `;
    }

    renderBottomNav() {
        return `
            <div class="fixed bottom-0 w-[375px] bg-white border-t">
                <div class="flex justify-around py-4">
                    <button class="text-blue-900">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                        </svg>
                    </button>
                    <button>
                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </button>
                    <button>
                        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }
} 