import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <motion.footer
            className="footer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="footer-container">
                <div className="footer-grid">
                    <motion.div className="footer-section">
                        <motion.h3 whileHover={{ scale: 1.05 }}>
                            About project
                        </motion.h3>
                        <p>
                            Best recipes collection.
                            Cook amazing dishes, share experience with us!
                        </p>
                    </motion.div>

                    <motion.div className="footer-section">
                        <motion.h3 whileHover={{ scale: 1.05 }}>
                            Useful links
                        </motion.h3>
                        <ul className="footer-links">
                            <motion.li whileHover={{ x: 10 }}>
                                <Link to="/">Home</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 10 }}>
                                <Link to="/popular">Popular recipes</Link>
                            </motion.li>
                            <motion.li whileHover={{ x: 10 }}>
                                <Link to="/categories">Categories</Link>
                            </motion.li>
                        </ul>
                    </motion.div>

                    <motion.div className="footer-section">
                        <motion.h3 whileHover={{ scale: 1.05 }}>
                            Follow us
                        </motion.h3>
                        <div className="social-links">
                            <motion.a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                            >
                                Instagram
                            </motion.a>
                            <motion.a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                            >
                                Facebook
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="footer-bottom"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p>© 2025 Recipes. All rights reserved.</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;