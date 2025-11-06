import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'
 
export const size = {
  width: 64,
  height: 64,
}
 
export const contentType = 'image/png'
 
export default async function Icon() {
  const imagePath = path.join(process.cwd(), 'public', 'img', 'photo.jpg')
  const imageBuffer = fs.readFileSync(imagePath)
  const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src={base64Image}
          alt="Kushal"
          width="64"
          height="64"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

