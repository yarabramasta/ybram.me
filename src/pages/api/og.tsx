import { ImageResponse } from '@vercel/og';
import format from 'date-fns/format';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge'
};

const fontRegular = fetch(
  new URL('../../assets/switzer-regular.otf', import.meta.url)
).then(res => res.arrayBuffer());
const fontBlack = fetch(
  new URL('../../assets/switzer-black.otf', import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const articleTitle = searchParams.get('title') ?? 'Not Found';
  const articleViews = parseInt(searchParams.get('views') ?? '0');
  const articleReadtime = searchParams.get('readtime') ?? '0 min read';
  const articleDate = format(
    new Date(searchParams.get('date' ?? '2023-01-01')),
    'MMM dd, yy'
  );

  const fontRegularData = await fontRegular;
  const fontBlackData = await fontBlack;

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
            flexDirection: 'column'
          }}
        >
          <h1
            style={{
              fontSize: 96,
              fontFamily: 'Switzer - Black',
              fontStyle: 'normal',
              lineHeight: '80px',
              color: '#f2f2f9',
              whiteSpace: 'pre-wrap'
            }}
          >
            {articleTitle}
          </h1>
          (
          <p
            style={{
              fontSize: 24,
              fontFamily: 'Switzer - Regular',
              fontStyle: 'normal',
              color: '#f2f2f9',
              opacity: 0.6,
              whiteSpace: 'pre-wrap'
            }}
          >
            {articleDate} &bull; {articleReadtime} &bull; {articleViews} views
          </p>
          )
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
      fonts: [
        {
          name: 'Switzer - Regular',
          data: fontRegularData,
          style: 'normal',
          weight: 400
        },
        {
          name: 'Switzer - Black',
          data: fontBlackData,
          style: 'normal',
          weight: 900
        }
      ]
    }
  );
}
