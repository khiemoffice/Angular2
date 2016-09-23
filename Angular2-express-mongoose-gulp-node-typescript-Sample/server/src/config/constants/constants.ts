/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

class Constants {
    static DB_CONNECTION_STRING: string = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://root:123456@ds035786.mlab.com:35786/angular_expressjs"
}
Object.seal(Constants);
export = Constants;