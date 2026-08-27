import { Link, Navigate, useParams } from 'react-router-dom';
import Img from '../components/Img';
import PostCard from '../components/PostCard';
import { Arrow } from '../components/Icons';
import { POSTS, getPost } from '../data/posts';
import type { Block } from '../data/posts';

function renderBlock(b: Block, i: number) {
  switch (b.t) {
    case 'h':
      return <h2 key={i}>{b.v}</h2>;
    case 'quote':
      return <blockquote key={i}>{b.v}</blockquote>;
    case 'ul':
      return (
        <ul key={i}>
          {b.v.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      );
    default:
      return <p key={i}>{b.v}</p>;
  }
}

export default function Article() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/insights" replace />;

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <section className="sec--tight">
      <div className="wrap">
        <Link to="/insights" className="link-a" style={{ marginBottom: '1.5rem' }}>
          &#8592; All articles
        </Link>

        <article className="article">
          <div className="art-meta">
            {post.cat} &middot; {post.date} &middot; {post.read}
          </div>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <div className="article-hero">
            <Img src={post.img} alt="" eager />
          </div>
          {post.body.map(renderBlock)}
          <p style={{ marginTop: '2rem' }}>
            <Link className="btn btn--pri" to="/contact">
              Discuss this with our team <Arrow />
            </Link>
          </p>
        </article>

        <div className="article article-more">
          <h3>Continue reading</h3>
          <div className="grid g2">
            {related.map((p, i) => (
              <PostCard post={p} delay={i} key={p.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
