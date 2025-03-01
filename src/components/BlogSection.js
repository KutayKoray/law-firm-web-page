import React from 'react';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Hukukta Yapay Zeka Kullanımı',
      description: 'Yapay zeka, hukuk sektöründe nasıl kullanılıyor? Bu yazıda detayları keşfedin.',
      image: '/img/content1.jpeg',
    },
    {
      id: 2,
      title: 'İş Hukuku ve Çalışan Hakları',
      description: 'İş hukuku ve çalışan hakları hakkında bilmeniz gerekenler.',
      image: '/img/content2.jpeg',
    },
    {
      id: 3,
      title: 'Ticaret Hukuku ve Sözleşmeler',
      description: 'Ticaret hukuku ve sözleşmelerle ilgili önemli bilgiler.',
      image: '/img/content3.jpeg',
    },
  ];

  return (
    <div className="blog-section">
      <div className="container">
        <h2>Blog</h2>
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-md-4" key={post.id}>
              <div className="blog-card">
                <img src={post.image} alt={post.title} className="blog-image" />
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <button className="btn btn-primary">Devamını Oku</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;