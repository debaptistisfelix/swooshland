import { loadStripe } from '@stripe/stripe-js';

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51MlaBCGchiLw6IuQQ8xDwhwdrG0wDMR34bc2MExpwbAzzOFaR2VmdZLw1TmcXFgivYidIYxVHnl4nBK1crcp3IEW00a73CWL5k")
    }
    return stripePromise;
};

export default getStripe;