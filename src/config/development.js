/*
 *Development config
 */

module.exports = {
    database: {
        name: 'course_voter',
        username: 'course_voter_user',
        password: 'course_voter_pw',
        options: {
            //host: localhost,
            //port: 3306,
            //protocol: 'tcp',
            logging: false,
            maxConcurrentQueries: 100,
            //storage: ':memory:',
            //omitNull: false,
            //native: false,
            //defined: {},
            //sync: { force: true },
            //syncOnAssociation: true,
            pool: { maxConnections: 5, maxIdleTime: 30 },
            //language: 'en',
            //protocol: null,
            dialect: 'postgres'
        }
    },
    logging: {
        verbose: true,
        vverbose: false
    },
    cache: {
        day: 0,
        hour6: 0,
        hour: 0,
        min15: 0,
        min3: 0,
        none: 0
    }
};