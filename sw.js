self.addEventListener('push', () => {
  let options = {
    body: 'Here is a notification body!',
    icon: 'https://staging.frontliners.ai/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  self.registration.showNotification('Hello Jeannette!', options);
});
