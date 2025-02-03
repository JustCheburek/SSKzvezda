import {ImageResponse} from 'next/og'
import {OGImageBox} from "@components/ogimage";

export const runtime = 'edge'

export const size = {width: 1200, height: 630}

export default async function Image() {
    const OpenSansMedium = await fetch(
        new URL('./OpenSans-Medium.ttf', process.env.NEXT_PUBLIC_URL!)
    ).then((res) => res.arrayBuffer())
    const OpenSansBold = await fetch(
        new URL('./OpenSans-Bold.ttf', process.env.NEXT_PUBLIC_URL!)
    ).then((res) => res.arrayBuffer())

    return new ImageResponse(
        (
            <OGImageBox>
              Этапы создания судно
            </OGImageBox>
        ),
        {
            ...size,
            fonts: [
                {
                    name: 'OpenSans',
                    data: OpenSansBold,
                    style: 'normal',
                    weight: 700,
                }, {
                    name: 'OpenSans',
                    data: OpenSansMedium,
                    style: 'normal',
                    weight: 500,
                },
            ]
        }
    )
}