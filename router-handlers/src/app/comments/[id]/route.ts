import { redirect } from 'next/navigation'
import { comments } from '../data'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments.find((comment) => comment.id === Number(params.id))

  if (!comment) {
    redirect('/comments')
  }

  return Response.json(comment)
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json()
  const { text } = body
  const index = comments.findIndex(
    (comment) => comment.id === Number(params.id)
  )
  comments[index].text = text

  return Response.json(comments[index])
}

export function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === Number(params.id)
  )

  const deletedComment = comments[index]

  comments.splice(index, 1)
  return Response.json(deletedComment)
}
