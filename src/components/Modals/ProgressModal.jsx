import CircularProgress from '@mui/material/CircularProgress';

const ProgressModal = () => {

    return (
        <>
            <div className="mfp-bg my-mfp-zoom-in mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready">
                <div className="mfp-container mfp-inline-holder">
                    <div className="mfp-content">
                        <div>
                            <div className="modal">
                                <div className="modal__content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    <h4 className="sign__title">Processing</h4>
                                    <CircularProgress />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProgressModal;
