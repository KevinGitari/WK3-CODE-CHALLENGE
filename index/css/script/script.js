document.addEventListener('DOMContentLoaded', () => {
  const titleElement = document.getElementById("title");
  const showtimeElement = document.getElementById("showtime");
  const availableTicketsElement = document.getElementById("availabletickets");
  const descriptionElement = document.getElementById("description");
  const buyTicketButton = document.getElementById("Buy-Ticket");
  const posterElement = document.getElementById("poster");


  // Function to fetch movie data from the server

  fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(movie => {

      // Calculate remaining tickets

      const remainingTickets = movie.capacity - movie.tickets_sold;

      // Update DOM with movie details

      titleElement.innerHTML = `${movie.title}`;
      showtimeElement.innerHTML = `${movie.showtime}`;
      availableTicketsElement.innerHTML = `${remainingTickets}`;
      descriptionElement.innerHTML = `${movie.description}`;


      // Assuming BuyTicketButton is text content, not innerHTML

      buyTicketButton.textContent = `${movie.BuyTicketButton}`;
      posterElement.src = `${movie.poster}`;


      // Event listener for Buy Ticket button

      buyTicketButton.addEventListener('click', () => {

        // Add your logic for buying a ticket here
        
        console.log('Buy ticket clicked');
      });
    })
    .catch(error => {
      console.error('Error fetching movie data:', error);
    });
});
