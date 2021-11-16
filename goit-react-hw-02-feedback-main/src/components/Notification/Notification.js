import PropTypes from 'prop-types';
import s from './Notification.module.css';


export default function Notification({ value }) {
  return <p className={s.notification}>{value}</p>;
}

Notification.propTypes = {
  value: PropTypes.string,
};