import React from 'react';
import _ from 'lodash';

import components, { Layout } from '../components/index';
import { getPageUrl } from '../utils';

export default class Landing extends React.Component {
    render() {
        const config = _.get(this.props, 'data.config');
        const page = _.get(this.props, 'page');
        const data = _.get(this.props, 'data');
        const posts = _.get(this.props, 'posts');
        const sections = _.get(page, 'sections');
        const pageUrl = getPageUrl(page);

        return (
            <Layout page={page} config={config}>
                {_.map(sections, (section, index) => {
                    const sectionType = _.get(section, 'type');
                    const component = _.upperFirst(_.camelCase(sectionType));
                    if (!component) {
                        throw new Error(`page section does not have the 'type' property, page: ${pageUrl}`);
                    }
                    const Component = components[component];
                    if (!Component) {
                        throw new Error(`no component matching the page section's type: ${sectionType}`);
                    }
                    return <Component key={index} section={section} data={data} posts={posts} />;
                })}
                <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6171bf58f7c0440a591f66a1/1fii56ssv';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
            </Layout>
        );
    }
}
