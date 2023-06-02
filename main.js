const londonBtn = document.querySelector('#london');
const newYorkBtn = document.querySelector('#new-york');
const parisBtn = document.querySelector('#paris');
const widgetContainer = document.querySelector('.widgetContainer'); 

function londonClick() {
    const newBlock = document.createElement('div');
    newBlock.innerHTML= `
    <div class="placeInfo-container" id="LondonInfo">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.040503356327!2d-0.14239142305474195!3d51.51247291033247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d5742d021f%3A0xa612bb1b1adfcb37!2zMTgwLTE4MiBSZWdlbnQgU3QuLCBMb25kb24gVzFCIDVUSiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2sru!4v1684767525755!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="place-desc">
                    <h2 class="subtitle">London</h2>
                    <h4 class="address">180-182 Regent Street, London, W1B 5BT</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam, est nisi dolorum odit laboriosam saepe dicta quia quidem mollitia.</p>
                    <ul class="info-list">
                        <li id="london-adress"> <i class="fas fa-map-marker"></i> 180-182 Regent Street, London, W1B 5BT</li>
                        <li> <i class="fas fa-phone"></i> 0123-456-789</li>
                        <li> <i class="fas fa-link"></i> www.yourwebsite.com</li>
                        <li> <i class="fas fa-envelope"></i> support@yourwebsite.com</li>
                        <li> <i class="fas fa-clock"></i> Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm</li>
                    </ul>
                    <div class="links">
                        <a href="http://www.facebook.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-facebook-f"></i>
                            </div>
                          </a>
                          <a href="http://www.twitter.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-twitter"></i>
                            </div>
                          </a>
                          <a href="http://www.instagramm.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-instagram"></i>
                            </div>
                          </a>
                          <a href="http://www.pinterest.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-pinterest"></i>
                            </div>
                          </a>
                    </div>
                </div>
            </div>
    `
    widgetContainer.innerHTML = ""
    widgetContainer.appendChild(newBlock);
}

function yorkClick() {
    const newBlock = document.createElement('div');
    newBlock.innerHTML = `
    <div class="placeInfo-container" id="LondonInfo">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.040503356327!2d-0.14239142305474195!3d51.51247291033247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d5742d021f%3A0xa612bb1b1adfcb37!2zMTgwLTE4MiBSZWdlbnQgU3QuLCBMb25kb24gVzFCIDVUSiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90LjRjw!5e0!3m2!1sru!2sru!4v1684767525755!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="place-desc">
                    <h2 class="subtitle">New York</h2>
                    <h4 class="address">109 Columbus Circle, New York, NY 10023</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam, est nisi dolorum odit laboriosam saepe dicta quia quidem mollitia.</p>
                    <ul class="info-list">
                        <li id="newYork-adress"> <i class="fas fa-map-marker"></i> 109 Columbus Circle, New York, NY 10023</li>
                        <li> <i class="fas fa-phone"></i> 0123-456-789</li>
                        <li> <i class="fas fa-link"></i> www.yourwebsite.com</li>
                        <li> <i class="fas fa-envelope"></i> support@yourwebsite.com</li>
                        <li> <i class="fas fa-clock"></i> Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm</li>
                    </ul>
                    <div class="links">
                        <a href="http://www.facebook.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-facebook-f"></i>
                            </div>
                          </a>
                          <a href="http://www.twitter.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-twitter"></i>
                            </div>
                          </a>
                          <a href="http://www.instagramm.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-instagram"></i>
                            </div>
                          </a>
                          <a href="http://www.pinterest.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-pinterest"></i>
                            </div>
                          </a>
                    </div>
                </div>
            </div>
    `
    widgetContainer.innerHTML = ""
    widgetContainer.appendChild(newBlock);
}
function parisClick() {
    const newBlock = document.createElement('div');
    newBlock.innerHTML = `
    <div class="placeInfo-container" id="LondonInfo">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6958997076513!2d2.331302276826066!3d48.864009000310624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e257ab8a9d9%3A0x60ac8c5b948a55ef!2zUnVlIFNhaW50LUhvbm9yw6ksIDc1MDAxIFBhcmlzLCDQpNGA0LDQvdGG0LjRjw!5e0!3m2!1sru!2sru!4v1684771200704!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div class="place-desc">
                    <h2 class="subtitle">Paris</h2>
                    <h4 class="address">2133 Rue Saint-Honoré, 75001 Paris</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam, est nisi dolorum odit laboriosam saepe dicta quia quidem mollitia.</p>
                    <ul class="info-list">
                        <li id="newYork-adress"> <i class="fas fa-map-marker"></i> 2133 Rue Saint-Honoré, 75001 Paris</li>
                        <li> <i class="fas fa-phone"></i> 0123-456-789</li>
                        <li> <i class="fas fa-link"></i> www.yourwebsite.com</li>
                        <li> <i class="fas fa-envelope"></i> support@yourwebsite.com</li>
                        <li> <i class="fas fa-clock"></i> Monday-Friday: 9am to 6pm  Saturday: 10am to 6pm  Sunday: 10am to 2pm</li>
                    </ul>
                    <div class="links">
                        <a href="http://www.facebook.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-facebook-f"></i>
                            </div>
                          </a>
                          <a href="http://www.twitter.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-twitter"></i>
                            </div>
                          </a>
                          <a href="http://www.instagramm.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-instagram"></i>
                            </div>
                          </a>
                          <a href="http://www.pinterest.com" class="social-icon">
                            <div class="social-circle">
                              <i class="fab fa-pinterest"></i>
                            </div>
                          </a>
                    </div>
                </div>
            </div>
    `
    widgetContainer.innerHTML = ""
    widgetContainer.appendChild(newBlock);
}
londonBtn.addEventListener('click', londonClick)
newYorkBtn.addEventListener('click', yorkClick)
parisBtn.addEventListener('click', parisClick)