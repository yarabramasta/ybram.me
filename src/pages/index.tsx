import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="max-w-[640px] mx-auto p-normal">
      {[...Array(20).keys()].map((v, i) => (
        <div key={v}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            recusandae cupiditate eos qui ad eius rem natus perferendis numquam
            asperiores hic dicta quos totam vitae praesentium, doloribus dolores
            necessitatibus. Quisquam vitae tenetur, possimus voluptates, neque
            quos sed voluptatem mollitia accusamus molestias sint nihil
            doloribus voluptatibus nostrum maiores enim fugiat eius, et nulla
            voluptate! Repellendus error eos dolorum eveniet obcaecati
            distinctio ullam nisi exercitationem eligendi cumque totam sed, iste
            rem esse dicta tenetur corporis ex numquam iure nemo labore animi
            quae suscipit? Quis fuga dolores, earum tempore sunt dolore minima
            corrupti, labore culpa ullam ex perspiciatis odit velit nulla
            architecto itaque?
          </p>
          {i !== 19 && <br />}
        </div>
      ))}
    </div>
  );
};

export default Home;
