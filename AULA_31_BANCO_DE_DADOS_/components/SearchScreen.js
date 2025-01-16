class SearchScreen {
    render() {
        const template = `
            <div class="bg-white rounded-3xl shadow-lg w-[375px] h-[812px] overflow-hidden">
                <!-- Header -->
                <div class="bg-blue-900 text-white p-6 pt-12">
                    <h2 class="text-lg mb-2">Where do you want to travel?</h2>
                    <div class="flex gap-2">
                        <input type="text" placeholder="Search Destination" class="flex-1 rounded-full px-4 py-2 text-sm text-gray-800">
                        <button class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Content -->
                <div class="p-6">
                    ${this.renderBestDeals()}
                    ${this.renderPopularDestinations()}
                </div>

                ${this.renderBottomNav()}
            </div>
        `;

        document.getElementById('search-screen').innerHTML = template;
    }

    renderBestDeals() {
        return `
            <h3 class="font-semibold mb-4">Best Deals</h3>
            <div class="grid grid-cols-2 gap-4 mb-6">
                ${this.renderDestinationCard('London', '4.8')}
                ${this.renderDestinationCard('Paris', '4.5')}
            </div>
        `;
    }

    renderDestinationCard(city, rating) {
        return `
            <div class="bg-gray-100 rounded-lg p-3">
                <div class="bg-gray-200 h-24 rounded-lg mb-2"></div>
                <div class="flex justify-between items-center">
                    <span class="text-sm">${city}</span>
                    <div class="flex items-center">
                        <span class="text-sm text-yellow-500">${rating}</span>
                        <svg class="w-4 h-4 text-yellow-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }

    renderPopularDestinations() {
        return `
            <h3 class="font-semibold mb-4">Popular Destinations</h3>
            <div class="grid grid-cols-2 gap-4">
                ${this.renderDestinationCard('Rome', '4.7')}
                ${this.renderDestinationCard('Barcelona', '4.6')}
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