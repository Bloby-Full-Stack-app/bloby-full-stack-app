import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert, Snackbar } from '@mui/material';

function Notification ({ alerts }) {
  const [open, setOpen] = useState(false);
  return (
    alerts !== null &&
    alerts?.length > 0 &&
    alerts.map(alert => (
      <Snackbar
        open={alert ? true : false}
        autoHideDuration={1000}
        onClose={() => setOpen(false)}
        key={alert.id}
      >
        <Alert
          severity={alert.alertType}
          sx={{
            mb: 2,
          }}
        >
          {alert.msg}
        </Alert>
      </Snackbar>
    ))
  );
};

Notification.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Notification);