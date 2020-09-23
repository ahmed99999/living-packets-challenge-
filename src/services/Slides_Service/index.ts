import HttpRequest from '../Http_Service';

class Slide {
    constructor(
        public id: number
    ) { }

    public static getSlides = async () => {
        try {
            const request = new HttpRequest();
            const { data: slides } = await request.get('/slides');
            return slides;
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