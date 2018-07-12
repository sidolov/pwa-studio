import { Component, createElement } from 'react';
import { connect } from 'react-redux';
import { func, shape, string } from 'prop-types';

import { requestOrder, resetCheckout, submitOrder } from 'src/actions/checkout';
import CheckoutFlow from './flow';

class CheckoutWrapper extends Component {
    static propTypes = {
        checkout: shape({
            status: string
        }),
        resetCheckout: func.isRequired,
        requestOrder: func.isRequired,
        submitOrder: func.isRequired
    };

    render() {
        const {
            checkout = {},
            resetCheckout,
            requestOrder,
            submitOrder
        } = this.props;
        const { status = 'READY' } = checkout;
        const flowProps = { resetCheckout, requestOrder, status, submitOrder };

        return <CheckoutFlow {...flowProps} />;
    }
}

const mapStateToProps = ({ checkout }) => ({ checkout });

const mapDispatchToProps = {
    resetCheckout,
    requestOrder,
    submitOrder
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutWrapper);
