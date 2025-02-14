import { communityLocations } from './locations.js';

const map = L.map('map').setView([38.9893, -76.9819], 14);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const icons = {
    recreation: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16a4 4 0 0 0 4-4c0-2-3-3-4-4-1 1-4 2-4 4a4 4 0 0 0 4 4z"/><path d="M12 8v1"/><path d="M12 15v1"/><path d="M9 12h1"/><path d="M14 12h1"/></svg>',
        color: '#FE8019'
    },
    education: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 6 8-4 8 4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/><path d="M18 5v17"/><path d="M6 5v17"/></svg>',
        color: '#FFDC00'
    },
    religious: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M5 9h14"/></svg>',
        color: '#B10DC9'
    },
    health: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><path d="M22 10.13V7a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/></svg>',
        color: '#FF4136'
    },
    transit: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10h10"/><path d="M7 14h10"/><path d="M10 7v10"/><path d="M14 7v10"/></svg>',
        color: '#0074D9'
    },
    social: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        color: '#3D9970'
    },
    youth: {
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>',
        color: '#FF851B'
    }
};

const markers = new Map();
const visibleMarkers = {};

const createCustomIcon = (svgContent, color) => {
    return L.divIcon({
        html: `<div style="background-color: white; border-radius: 50%; padding: 2px; box-shadow: 0 2px 5px rgba(0,0,0,0.2);">
                <div style="color: ${color};">${svgContent}</div>
              </div>`,
        className: 'custom-div-icon',
        iconSize: [24, 24],  
        iconAnchor: [12, 12], 
        popupAnchor: [0, -12]  
    });
};

function generatePopupContent(location) {
    let hoursHtml = location.hours.map(h => 
        `<li><strong>${h.days}:</strong> ${h.time}</li>`
    ).join('');

    return `
        <div class="custom-popup">
            <h3>${location.name}</h3>
            <p><strong>Address:</strong> ${location.address}</p>
            <p><strong>Tel:</strong> ${location.phone}</p>
            ${location.email ? `<p><strong>Email:</strong> ${location.email}</p>` : ''}
            <p><strong>Hours:</strong></p>
            <ul style="margin: 0; padding-left: 20px;">
                ${hoursHtml}
            </ul>
        </div>`;
}

function addLocation(location) {
    const icon = icons[location.type];
    if (!icon) return;

    const marker = L.marker([location.lat, location.lng], {
        icon: createCustomIcon(icon.svg, icon.color)
    }).bindPopup(generatePopupContent(location), { className: 'custom-popup', maxWidth: 300 });

    marker.addTo(map);
    markers.set(location.name, { marker, type: location.type });
    if (!visibleMarkers[location.type]) visibleMarkers[location.type] = true;
}

communityLocations.forEach(addLocation);

const searchBox = document.querySelector('.search-box');
const searchResults = document.querySelector('.search-results');

function searchLocations(query) {
    query = query.toLowerCase();
    return communityLocations.filter(location => 
        location.name.toLowerCase().includes(query) ||
        location.type.toLowerCase().includes(query) ||
        location.address.toLowerCase().includes(query)
    );
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    results.forEach(location => {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <div>${location.name}</div>
            <div class="search-result-type">${location.type.charAt(0).toUpperCase() + location.type.slice(1)} • ${location.address}</div>
        `;
        div.addEventListener('click', () => {
            const marker = markers.get(location.name);
            if (marker) {
                map.setView([location.lat, location.lng], 16);
                marker.marker.openPopup();
            }
            searchResults.style.display = 'none';
            searchBox.value = '';
        });
        searchResults.appendChild(div);
    });

    searchResults.style.display = 'block';
}

function toggleMarkers(type) {
    visibleMarkers[type] = !visibleMarkers[type];
    markers.forEach(({ marker, type: markerType }) => {
        if (markerType === type) {
            if (visibleMarkers[type]) {
                marker.addTo(map);
            } else {
                map.removeLayer(marker);
            }
        }
    });
}

searchBox.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    const results = searchLocations(query);
    displaySearchResults(results);
});

document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
    }
});

const legend = L.control({ position: 'bottomright' });
legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'legend');
    div.innerHTML = '<h4>Community Resources</h4>';
    for (const type in icons) {
        const icon = icons[type];
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `
            <div style="color: ${icon.color}; display: inline-block;">
                ${icon.svg}
            </div>
            <span style="margin-left: 8px;">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
        `;
        item.onclick = () => {
            toggleMarkers(type);
            item.classList.toggle('disabled', !visibleMarkers[type]);
        };
        div.appendChild(item);
    }
    return div;
};
legend.addTo(map);
