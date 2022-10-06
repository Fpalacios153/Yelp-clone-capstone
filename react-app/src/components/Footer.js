import './Footer.css'
export default function Footer() {

    return (
        <>
            <div className="bottom-container">
                <div className="splash-about-container">
                    <h2>About Help!</h2>
                    <div className='splash-github-link'>
                        <a className='github-links' href='https://github.com/Fpalacios153/Yelp-clone-capstone' target='_blank'>CodeBase</a>
                        <a className='github-links' href='https://github.com/Fpalacios153/Yelp-clone-capstone/blob/main/README.md' target='_blank'>README</a>
                    </div>
                </div>
                <div className="splash-discover-container">
                    <h2>Discover</h2>
                    <div className='splashProfileIcons'>
                        <a href='https://github.com/Fpalacios153' target="_blank">
                            <i className="fa-brands fa-square-github devLinks fa-4x"></i>
                        </a>
                        <a href="https://www.linkedin.com" target="_blank">
                            <i className="fa-brands fa-linkedin devLinks fa-4x"></i>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
