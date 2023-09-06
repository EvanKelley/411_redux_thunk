import { connect } from 'react-redux';
import Import from '../components/Import';

// Define the mapStateToProps function to map the "makes" property from Redux state
const mapStateToProps = (state) => {
    return {
        makes: state.makes,
    };
};

// Connect the Import component to Redux using mapStateToProps
export default connect(mapStateToProps)(Import);