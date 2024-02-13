import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect';
import { useTypingEffect } from '../hooks/typing-effect';

const About = () => {
  const text = useTypingEffect("Lorem ipsum dol", 500);
  return (
    <div className='container'>
      <div className='about_holder'>
        <p className='about_text'>
          <Typewriter
            options={{
              strings: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquid corrupti perferendis sequi delectus nobis eius aut alias dolor sint recusandae, natus illum maiores pariatur voluptas aperiam consequatur aliquam doloribus distinctio ratione maxime nulla, qui beatae! Ab cum blanditiis veritatis similique dolorem, asperiores tempora assumenda porro, voluptates, ducimus reprehenderit omnis illum illo nisi. Saepe, officia quidem ipsam id repellendus mollitia! Ullam perferendis recusandae, nesciunt sed debitis expedita, unde veniam ab, repellendus incidunt facere at in doloribus consequatur. Sapiente voluptatum harum autem aut, qui, libero ipsa assumenda distinctio iusto fuga ipsam alias quidem aliquid, soluta dolore rem ab dolores odio architecto ut rerum facilis modi. Obcaecati totam autem molestias, ipsum quae reiciendis quo, quia vitae velit voluptatum quam? Inventore ut reprehenderit aspernatur laudantium quas voluptatum reiciendis officia hic sint voluptate saepe velit omnis unde pariatur quos, cum, quam corporis, suscipit provident temporibus? Quidem nostrum quia nisi velit quasi doloremque totam, quo hic nobis perferendis officiis, eos nihil ab fuga itaque ipsam exercitationem eveniet cupiditate asperiores eum dolorem quaerat! Fugit doloribus, aspernatur accusantium ipsum autem, impedit ducimus nostrum laudantium iste commodi nisi eos enim unde necessitatibus eum voluptatem deserunt, labore facere provident soluta iusto nobis? Voluptates corrupti enim officia esse ducimus! Velit neque nisi dolorem harum pariatur ipsum mollitia accusantium, asperiores repellendus quo! Iusto minus ipsam culpa autem et deleniti fugit voluptatum reiciendis ab doloremque modi, numquam beatae exercitationem illo. Ducimus, ipsam nulla, earum tempora alias aspernatur ipsum autem minus reprehenderit deleniti facere quis nemo voluptatem. Aliquid, voluptatibus vero libero neque accusamus corporis molestias blanditiis, facere nemo provident ad. Possimus ab iste in facilis inventore illum animi odit. Facere labore voluptatibus quasi deserunt, animi autem voluptas nam asperiores incidunt corporis exercitationem debitis, unde, suscipit adipisci? Itaque, blanditiis nam? Eius impedit voluptas dolor numquam. Repellendus aut asperiores minus maxime saepe perferendis et assumenda voluptas officiis nisi tempora excepturi expedita repudiandae sunt officia, neque harum voluptatum beatae quidem sed. Reprehenderit recusandae consequatur alias aspernatur excepturi itaque! Dolorem non architecto temporibus, vitae voluptate debitis. Dicta explicabo debitis blanditiis autem veniam adipisci dignissimos, expedita cumque, quisquam sapiente, vitae maxime porro voluptatum ex dolore voluptate. Maiores autem sint nemo deleniti velit perferendis vel adipisci dignissimos. Quos, ex commodi debitis similique amet quia recusandae quidem accusantium autem totam esse impedit beatae fugiat sunt distinctio quam saepe tenetur qui odit voluptas eaque iste eligendi sed dignissimos. Vitae autem deserunt similique unde in eius assumenda expedita aut ipsa, ab quas odit, aperiam minus! Veritatis eaque corporis, est blanditiis suscipit numquam tempore omnis qui. Explicabo fugiat quidem, pariatur cum provident ratione. Dolores, sequi animi voluptatum eligendi aliquam blanditiis ullam facilis officiis quam quasi, reprehenderit neque eum commodi esse, quos error? Consequatur sint nemo ad molestiae possimus nihil rerum itaque amet debitis expedita illum cum eligendi pariatur quae tempore nam iure explicabo quis, distinctio ipsam doloremque soluta impedit eveniet? Praesentium a aliquam reprehenderit error dolorem maxime quo, ab tempore deleniti ad tempora impedit eius explicabo adipisci itaque? Exercitationem at ab dolorem accusamus beatae doloribus blanditiis minus dolores? Reprehenderit mollitia corporis at fugiat!'],
              autoStart: true,
              loop: false,
              cursor: ' 𝗜',
              delay: 60
            }}
          />
        </p>
      </div>
    </div>
  )
}

export default About