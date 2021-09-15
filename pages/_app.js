import Header from "../components/Header"
import Footer from "../components/Footer"
import 'tailwindcss/tailwind.css'
import '../public/styles.css'
import { Provider } from "react-redux"
import store from "../store/store"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(
        <Provider store={store}>
            <ToastContainer limit={3}/>
            <Header/>
            <Component {...pageProps}/>
            <Footer/>
        </Provider>
    )
}

export default MyApp