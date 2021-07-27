self.addEventListener('push', () => {
  let options = {
    body: 'You have new activity on Frontliners',
    icon: 'https://staging.frontliners.ai/img/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  self.registration.showNotification('We have CTA now!', options);
});

self.addEventListener('notificationclick', function (e) {
  var notification = e.notification;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('https://friendly-bose-2c9c03.netlify.app/');
    notification.close();
  }
});