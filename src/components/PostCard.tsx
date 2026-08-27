import type { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from './Reveal';
import Img from './Img';
import { Arrow } from './Icons';
import type { Post } from '../data/posts';

/** The whole card is the hit target, and it is keyboard-activatable. */
export default function PostCard({ post, delay = 0 }: { post: Post; delay?: number }) {
  const navigate = useNavigate();
  const go = () => navigate(`/insights/${post.slug}`);

  return (
    <Reveal
      as="article"
      className="post"
      delay={delay}
      role="link"
      tabIndex={0}
      aria-label={`Read: ${post.title}`}
      onClick={go}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          go();
        }
      }}
    >
      <div className="post-img">
        <Img src={post.img} alt="" />
      </div>
      <div className="post-body">
        <div className="post-meta">
          {post.cat} &middot; {post.read}
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="link-a">
          Read article <Arrow />
        </span>
      </div>
    </Reveal>
  );
}
