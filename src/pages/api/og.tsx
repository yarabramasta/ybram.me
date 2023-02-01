import { ImageResponse } from '@vercel/og';
import format from 'date-fns/format';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge'
};

// const fontBold = fetch(
//   new URL('../../assets/switzer-bold.otf', import.meta.url)
// ).then(res => res.arrayBuffer());
const font = fetch(
  'https://api.fontshare.com/v2/css?f[]=switzer@700,400&display=swap'
).then(res => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const postTitle = searchParams.get('title') ?? 'Not Found';
  const postViews = parseInt(searchParams.get('views') ?? '0');
  const postDate = format(
    new Date(searchParams.get('date' ?? '2023-01-01')),
    'MMM dd, yy'
  );

  // const fontBoldData = await fontBold;
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage:
            'url(https://media.graphassets.com/zuuIGXUwRJ6kWtNeZTiz)'
        }}
      >
        <div
          style={{
            marginLeft: 80,
            marginRight: 80,
            display: 'flex',
            fontSize: 130,
            fontFamily: 'Switzer',
            fontStyle: 'bold',
            color: '#f2f2f9',
            lineHeight: '120px',
            whiteSpace: 'pre-wrap'
          }}
        >
          {postTitle.length === 0 ? 'Not Found' : postTitle}
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Switzer',
          data: fontData,
          style: 'normal'
        }
      ]
    }
  );
}
