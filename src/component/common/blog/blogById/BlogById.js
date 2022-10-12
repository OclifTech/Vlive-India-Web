import React from "react";
import blogImg from "./../../../../assests/img/img3.jpg";
import './blogById.css'

export default function BlogById() {
  return (
    <div className="">
      <div className="img-section">
        <img src={blogImg} alt="blog img" className="blog-img" />
        <div className="b-title">
        <h2 className="text-light b-text-font">International Women’s Day <br /> celebration at the <br /> Adani Group</h2>
        <h6 className="text-light">A panel discussion on ‘Importance of Women Empowerment in nation-building</h6>
        </div>
      </div>
      <div className="title-section container mt-5 pt-4">
        <h4 className="text-center font-weight-bold">mhjb A panel discussion on ‘Importance of Women Empowerment in nation-buildinA panel discussion on ‘Importance of Women Empowerment in nation-buildin </h4>
      </div>
      <div className="blog-text-section container mt-5 pt-5">
        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem vel eum i[r]ure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
      </div>
    </div>
  );
}
