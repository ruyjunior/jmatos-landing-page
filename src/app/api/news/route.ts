import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextResponse } from 'next/server';

interface NewsItem {
    title: string;
    link: string;
    summary: string;
    image: string;
}

export async function GET() {
    try {
        const url = 'https://cbboxe.org.br/noticias/';
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const articles: NewsItem[] = [];  // Agora tipado como NewsItem[]

        $('article').each((index, element) => {
            if (index >= 10) return false; // Pega no máximo 10 notícias

            const title = $(element).find('h1.entry-title a').text().trim();
            const link = $(element).find('h1.entry-title a').attr('href');
            const summary = $(element).find('.entry-content p').text().trim();
            const image = $(element).find('.post-img-wrap img').attr('data-lazy-src');

            // Se link, título ou imagem estiverem ausentes, você pode usar um valor padrão ou retornar.
            if (link && title && image) {
                articles.push({ title, link, summary, image });
            }
        });

        return NextResponse.json(articles);
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        return NextResponse.json({ error: 'Erro ao buscar notícias' }, { status: 500 });
    }
}
