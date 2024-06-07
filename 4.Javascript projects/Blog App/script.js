let redCount = 0;
let greenCount = 0;
let blueCount = 0;

function incrementCounter(color) {
    switch (color) {
        case 'red':
            redCount++;
            break;
        case 'green':
            greenCount++;
            break;
        case 'blue':
            blueCount++;
            break;
    }
    updateTotalCount();
}

function updateTotalCount() {
    const totalCount = redCount + greenCount + blueCount;
    document.getElementById('countDisplay').textContent = `Totalclicks: ${totalCount}`;
}

// Example usage: Navigate to the next page with the current count
function goToNextPage() {
    const url = new URL(window.location.href);
    url.searchParams.append('red', redCount.toString());
    url.searchParams.append('green', greenCount.toString());
    url.searchParams.append('blue', blueCount.toString());
    window.location.href = url.toString();
}