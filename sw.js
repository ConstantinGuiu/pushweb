self.addEventListener('push', () => {
  var options = {
    body: 'Here is a notification body!',
    icon: 'images/example.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  self.registration.showNotification('Hello there, world!', options);
});
