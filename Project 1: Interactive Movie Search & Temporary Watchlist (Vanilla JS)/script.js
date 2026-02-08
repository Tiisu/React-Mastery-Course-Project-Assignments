// API Configuration
const API_KEY = '11080920';
const API_BASE_URL = 'https://www.omdbapi.com/';

// In-memory watchlist array
let watchlist = [];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const statusMessage = document.getElementById('statusMessage');
const movieGrid = document.getElementById('movieGrid');
const watchlistGrid = document.getElementById('watchlistGrid');
const watchlistEmpty = document.getElementById('watchlistEmpty');
const themeToggle = document.getElementById('themeToggle');

// Event Listeners
searchBtn.addEventListener('click', searchMovies);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchMovies();
  }
});

// Bonus: Live character counter
searchInput.addEventListener('input', (e) => {
  const charCount = e.target.value.length;
  if (charCount > 0) {
    statusMessage.textContent = `Search term: ${charCount} chars`;
    statusMessage.style.color = '#666';
  } else {
    statusMessage.textContent = '';
  }
});

themeToggle.addEventListener('click', toggleTheme);

// Initialize
updateWatchlistDisplay();

// Search Movies Function
function searchMovies() {
  const searchTerm = searchInput.value.trim();
  
  if (!searchTerm) {
    statusMessage.textContent = 'Please enter a movie name to search.';
    statusMessage.style.color = '#ff6b6b';
    return;
  }
  
  // Show loading state
  statusMessage.textContent = 'Searching...';
  statusMessage.style.color = '#4CAF50';
  movieGrid.innerHTML = '';
  
  // Fetch movies from OMDb API
  const url = `${API_BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchTerm)}`;
  
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.Response === 'True') {
        displayMovies(data.Search);
        statusMessage.textContent = `Found ${data.Search.length} results for "${searchTerm}"`;
        statusMessage.style.color = '#4CAF50';
      } else {
        movieGrid.innerHTML = '';
        statusMessage.textContent = `No movies found for "${searchTerm}". Try a different search term!`;
        statusMessage.style.color = '#ff6b6b';
      }
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
      statusMessage.textContent = 'Oops! Something went wrong. Please check your connection or API key.';
      statusMessage.style.color = '#ff6b6b';
      movieGrid.innerHTML = '';
    });
}

// Display Movies in Grid
function displayMovies(movies) {
  movieGrid.innerHTML = '';
  
  movies.forEach(movie => {
    const movieCard = createMovieCard(movie);
    movieGrid.appendChild(movieCard);
  });
}

// Create Movie Card Element
function createMovieCard(movie, isWatchlist = false) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  
  const poster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/220x330?text=No+Poster';
  
  card.innerHTML = `
    <img src="${poster}" alt="${movie.Title}" />
    <div class="movie-card-content">
      <h3>${movie.Title}</h3>
      <p>Year: ${movie.Year}</p>
      <p>Type: ${movie.Type}</p>
    </div>
    <div class="movie-card-actions">
      ${isWatchlist 
        ? `<button class="remove-from-watchlist" data-id="${movie.imdbID}">Remove from Watchlist</button>`
        : `<button class="add-to-watchlist" data-id="${movie.imdbID}">Add to Watchlist</button>`
      }
    </div>
    <div class="movie-details" id="details-${movie.imdbID}"></div>
  `;
  
  // Hover effects (handled by CSS)
  
  // Click to show details
  card.addEventListener('click', (e) => {
    // Don't trigger if clicking the button
    if (!e.target.classList.contains('add-to-watchlist') && 
        !e.target.classList.contains('remove-from-watchlist')) {
      toggleMovieDetails(movie.imdbID);
    }
  });
  
  // Add to watchlist button
  if (!isWatchlist) {
    const addBtn = card.querySelector('.add-to-watchlist');
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToWatchlist(movie);
    });
  } else {
    const removeBtn = card.querySelector('.remove-from-watchlist');
    removeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeFromWatchlist(movie.imdbID);
    });
  }
  
  return card;
}

// Toggle Movie Details
function toggleMovieDetails(imdbID) {
  const detailsDiv = document.getElementById(`details-${imdbID}`);
  
  if (detailsDiv.classList.contains('show')) {
    detailsDiv.classList.remove('show');
    return;
  }
  
  // If already loaded, just show it
  if (detailsDiv.innerHTML !== '') {
    detailsDiv.classList.add('show');
    return;
  }
  
  // Fetch detailed info
  const url = `${API_BASE_URL}?apikey=${API_KEY}&i=${imdbID}`;
  
  fetch(url)
    .then(response => response.json())
    console.log(respo)
    .then(data => {
      if (data.Response === 'True') {
        detailsDiv.innerHTML = `
          <p><strong>Plot:</strong> ${data.Plot !== 'N/A' ? data.Plot : 'Not available'}</p>
          <p><strong>Rating:</strong> ${data.imdbRating !== 'N/A' ? data.imdbRating + '/10' : 'Not rated'}</p>
          <p><strong>Actors:</strong> ${data.Actors !== 'N/A' ? data.Actors : 'Not available'}</p>
        `;
        detailsDiv.classList.add('show');
      }
    })
    .catch(error => {
      console.error('Error fetching movie details:', error);
      detailsDiv.innerHTML = '<p>Could not load details.</p>';
      detailsDiv.classList.add('show');
    });
}

// Add to Watchlist
function addToWatchlist(movie) {
  // Check if already in watchlist
  if (watchlist.find(m => m.imdbID === movie.imdbID)) {
    alert('This movie is already in your watchlist!');
    return;
  }
  
  watchlist.push(movie);
  updateWatchlistDisplay();
}

// Remove from Watchlist
function removeFromWatchlist(imdbID) {
  watchlist = watchlist.filter(movie => movie.imdbID !== imdbID);
  updateWatchlistDisplay();
}

// Update Watchlist Display
function updateWatchlistDisplay() {
  watchlistGrid.innerHTML = '';
  
  if (watchlist.length === 0) {
    watchlistEmpty.classList.remove('hidden');
  } else {
    watchlistEmpty.classList.add('hidden');
    watchlist.forEach(movie => {
      const movieCard = createMovieCard(movie, true);
      watchlistGrid.appendChild(movieCard);
    });
  }
}

// Toggle Theme
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️ Light Mode';
  } else {
    themeToggle.textContent = '🌙 Dark Mode';
  }
}
