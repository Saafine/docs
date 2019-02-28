1. Attack <a href="javascript: alert('hey!')">click me to loss password</a>
2. Attack <div id="message"></div>
3. Attack <script deferred>alert('take pass')</script>

const message = {};
message.text = `<img src onerror="alert('take password')"`;
const messageEl = document.getElementById('message');
messageEl.innerHTML = '<p>' + message.text + '</p>'; // fix: use textContent 


