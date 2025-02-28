import styles from './Container.module.css'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
function Container({ children }) {
    Container.propTypes = {
        children: PropTypes.any
      }.isRequired
      
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
    
}

export default Container