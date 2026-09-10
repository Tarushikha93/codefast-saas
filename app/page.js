import ButtonLogin from "./components/ButtonLogin";
import FAQListItems from "./components/FAQListItems";
import Image from "next/image";
import productImage from "./productDemo.jpeg";

const pricing = ["Unlimited Boards", "Unlimited Users", "Unlimited Feedbacks"];

const isLoggedIn = true;
//const name = "Tarushikha Sharma";
const person = { name: "Tarushikha", age: 20, city: "New Delhi" };
const { name, age, city } = person;
//person.name = "Tarushikha Sharma";
function Home() {
  return (
    <main>
      {/*Header*/}
      <section className="bg-base-200 flex justify-between items-center px-8 scroll-py-2">
        <div className="font-bold space-x-6 max-w-5xl mx-auto py-4 px-8 rounded-lg max">
          <a className="link link-hover" href="#faq">
            FAQ
          </a>
          <a className="link link-hover" href="#pricing">
            Pricing
          </a>
        </div>
      </section>
      {/*Hero*/}

      <section className="px-8 text-center max-lg:text-left py-32 max-w-5xl mx-auto flex max-lg:flex-row gap-14 items-start">
        <Image
          src={productImage}
          alt="Product Demo"
          className="w-96 rounded-xl h-100 object-contain"
        />
        <div>
          <h1 className="text-4xl font-extrabold mb-6 lg:text-6xl">
            Collect customer feedback and improve your business
          </h1>

          <div className="opacity-90">
            create a feedback board in minuted, prioritize feature requests, and
            keep your customers in the loop.
          </div>
          <ButtonLogin
            isLoggedIn={isLoggedIn}
            name={person.name}
            age={person.age}
            city={person.city}
          >
            <div> this is inside the button</div>
          </ButtonLogin>
          <div className="title"> Hey this is a child</div>
          <div> this is a children</div>
        </div>
      </section>

      {/*Pricing*/}
      <section className="bg-base-200" id="pricing">
        <div className="py-32 px-8 max-w-5xl mx-auto">
          <p
            className="text-2xl font-medium mb-2
          text-center
          text-violet-400
          border-fuchsia-400
          uppercase"
          >
            Pricing
          </p>

          <div className="max-w-3xl mx-auto py-2 px-8 text-center font-extrabold">
            <h2> A pricing that meets your needs</h2>

            <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto">
              <div className="flex gap-2 items-baseline text-justify-center">
                <div className="text-5xl font-black ">$19 </div>
                <div className="uppercase text-sm font-medium opacity-50">
                  /month
                </div>
              </div>
              <div className="font-medium color-opacity-50 text-sm mb-6 text-pink-500">
                <ul>
                  {pricing.map((price) => {
                    return (
                      <li className="flex items-center gap-2" key={price}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className=" w-4 h-4 text-green-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        {price}
                      </li>
                    );
                  })}
                </ul>
                <ButtonLogin
                  isLoggedIn={isLoggedIn}
                  name={name}
                  extraStyle="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*FAQ*/}
      <section className="bg-base-200" id="faq">
        <div className="py-32 px-8 max-w-3xl mx-auto">
          <p
            className="text-2xl font-medium mb-2
          text-center
          text-violet-400
          border-fuchsia-400
          uppercase"
          >
            FAQ
          </p>

          <h2 className="max-w-3xl mx-auto py-2 px-8 text-center font-extrabold">
            {" "}
            Frequently Asked Questions
          </h2>

          <ul>
            {[
              {
                question: "What is your return policy?",
                answer: "Return ho jayega not an issue!",
              },
              { question: "How do I track my order?", answer: "Paper and Pen" },
              {
                question: "Can I purchase items again?",
                answer: "Not required",
              },
            ].map((faq) => (
              <FAQListItems key={faq.question} faq={faq} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
export default Home;
