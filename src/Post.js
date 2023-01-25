import React from 'react'
import { Card, Badge } from 'react-bootstrap'

export default function Post({ post }) {
  return (
    <Card>
        <Card.Body>
            <div className='d-flex justify-content-between'>
                <div>
                    <Card.Title>
                    {post.title} - <span className='text-muted font-weight-light'>{post.company}</span>
                    </Card.Title>
                    <Badge variant="secondary" className='mr-2'>{post.type}</Badge>
                    <Badge variant="secondary">{post.location}</Badge>
                </div>
            </div>
        </Card.Body>
    </Card>
  )
}
