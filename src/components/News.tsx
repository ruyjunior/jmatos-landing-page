'use client';

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface NewsItem {
  title: string;
  summary: string;
  image: string;
  link: string;
}

interface ArrowProps {
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md"
      onClick={onClick}
    >
      <FaArrowRight size={20} className="text-gray-700" />
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md"
      onClick={onClick}
    >
      <FaArrowLeft size={20} className="text-gray-700" />
    </div>
  );
};

const NewsCarousel: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Função para buscar as notícias
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news'); // Endpoint que retorna as notícias
        setNews(response.data.slice(0, 10)); // Limita às 10 últimas notícias
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchNews();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostra 1 card por vez
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="news" className="py-16 bg-gray-100 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Últimas Notícias
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {news.map((item, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative w-full h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.summary}</p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline mt-4 block"
                    >
                      Leia mais
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
