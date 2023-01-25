import React from 'react'
import { Card } from 'react-bootstrap'

export default function Post({ post }) {
  return (
    <Card>
        <Card.Body>
            <div className='d-flex justify-content-between'>
                <div>
                    <Card.Title>
                    {post.title}
                    </Card.Title>
                </div>
            </div>
        </Card.Body>
    </Card>
  )
}
