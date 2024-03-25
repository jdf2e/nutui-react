import React from 'react'
import { Cell, Tag } from '@nutui/nutui-react'

const Demo4 = () => {
  return (
    <>
      <Cell
        title="image-text"
        extra={
          <Tag type="info">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                height="10"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAsCAMAAAAgsQpJAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTP////////////////////////////////////////////////////////////////////////////////////VtkI8AAAAVdFJOUwAdEr+crtuABfTnao8pUMpddzJFO9SD9HUAAAFqSURBVDjLjVVbAoMgDBN5CfhC5P5XXYtuDilivyaEpg0p67oiJufnvmvF4FTEkOEZ52z8xrLVYb1EhJEjT1BXpV1gVzmsbxoN/PYVoIC9cTg/GJ6aSdycsw3Ab8juIYXIKlY0+V4kWGO0BNDfEgI5aDWVQJBmbS9BqPK4BhVeAR0JhKZDCRQFbiX0xbWN6EXd5WWWUJJTJvBEkbCmCpcoQh9G1AjNmIHyzpKvMrCaLuXB5awgtI8aiMvWN3K0514zuJmycxWLo2yWnR9jpK7ljM38NtHucqiO4WVe/ohLFjoul/bsxQ2Ev4yi/pysUKO8auR0TqbxOcm6jsta1Lmn1ySqXEfobWQZ7HhsrP535CZNgoprMdFEPt95ep/eQBP+LtUIuvKQuMLXdVGyqhZBnS0y8yQZFmAPgCwMW+SMeE2MGslyQjXOLm/9A8yI8Y0KT1MtiLa6Eei5NLsvApTc3iDTePauRa1hOD/vACHPGH6amQAAAABJRU5ErkJggg=="
                alt=""
              />
              标签
            </div>
          </Tag>
        }
      />
    </>
  )
}
export default Demo4
