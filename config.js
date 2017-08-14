export default {
    db: {
        uri: 'data.db'
    },
    nginx: {
        conf_dir: '/etc/nginx/gitlab_apps',
        tasks: {
            test: '/sbin/nginx -t',
            restart: '/bin/systemctl restart nginx'
        }
    },
    ssl: {
        domain_list: '/etc/dehydrated/domains.txt',
        tasks: {
            renew: '/usr/bin/p /usr/share/dehydrated/dehydrated -c'
        }
    }
};
