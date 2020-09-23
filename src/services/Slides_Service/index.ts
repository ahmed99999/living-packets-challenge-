import HttpRequest from '../Http_Service';
import slides from './slides.json';

class Slide {
    constructor(
        public id: number
    ) { }

    public static getSlides = async () => {
        try {
            return slides;
            // here I would make the HttpRequest as follow:

            // 1-  const request = new HttpRequest();
            // 2- const { data: slides } = await request.get('/slides');
            // 3- return slides;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    public getSlide = async () => {
        try {
            const request = new HttpRequest();
            const { data: slide } = await request.get(`/slides/${this.id}`);
            return slide;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}

export default Slide;