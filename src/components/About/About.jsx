import React, { useContext } from 'react';
import { I18nContext } from '../../i18n';
import './About.css'
const About = () => {
    const { translate } = useContext(I18nContext);

    return (<div className="red">
        <p>Please open the {translate('main-menu', 'title')}</p>
    </div>
    );
}

export default About;