import { REVIEW } from "../constants";

const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12">
      <h2 className="text-3xl lg:text-4xl text-center">Our Reviews</h2>
      <div className="flex flex-col">
        {REVIEW.map((review) => (
          <div key={review.name} className="mb-10">
            <p className="text-3xl mb-6 font-light leading-normal tracking-tighter lg:mx-40 lg:mt-20 lg:text-3xl"> 
              {review.content}
            </p>
            <div className="flex items-center justify-center gap-6">
              <img
                src={review.image}
                alt={review.name}
                height={80}
                width={80}
                className="rounded-full border"
              />
              <div className="tracking-tighter">
                <h6>{review.name}</h6>
                <p className="text-sm text-neutral-500">{review.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </section>
  );
};

export default Review;
