import PropTypes from 'prop-types';

// Bildirim bileşeni
const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>Bu harfi daha önce kullandın!</p> {/* Kullanıcıya gösterilecek bildirim metni */}
    </div>
  )
}

// PropTypes tanımlaması: showNotification, boolean türünde ve zorunlu
Notification.propTypes = {
    showNotification: PropTypes.bool.isRequired, // showNotification prop'unun boolean olduğunu belirttik
};

export default Notification;
