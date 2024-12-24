import React from 'react'
import { Del, Failure, Link as LinkIcon, Loading } from '@nutui/icons-react'
import Image from '@/packages/image'
import { FileItem } from '../uploader'
import { Progress } from '../progress/progress'

export const Preview: React.FunctionComponent<any> = ({
  fileList,
  previewType,
  deletable,
  onDeleteItem,
  handleItemClick,
  previewUrl,
  deleteIcon,
  children,
}) => {
  const renderIcon = (item: FileItem) => {
    if (item.status === 'error') {
      return item.failIcon || <Failure color="#fff" />
    }
    return (
      item.loadingIcon || <Loading className="nut-icon-loading" color="#fff" />
    )
  }
  return (
    <>
      {fileList.length !== 0 &&
        fileList.map((item: FileItem, index: number) => {
          const {
            status = 'success',
            uid = index,
            url,
            message = '',
            name = '',
            type = 'image',
          } = item

          return (
            <div className={`nut-uploader-preview ${previewType}`} key={uid}>
              {previewType === 'picture' && !children && deletable && (
                <div
                  onClick={() => onDeleteItem(item, index)}
                  className="close"
                >
                  {deleteIcon}
                </div>
              )}
              {previewType === 'picture' && !children && (
                <div className="nut-uploader-preview-img">
                  {status === 'ready' ? (
                    <div className="nut-uploader-preview-progress">
                      <div className="nut-uploader-preview-progress-msg">
                        {message}
                      </div>
                    </div>
                  ) : (
                    status !== 'success' && (
                      <div className="nut-uploader-preview-progress">
                        {renderIcon(item)}
                        <div className="nut-uploader-preview-progress-msg">
                          {message}
                        </div>
                      </div>
                    )
                  )}

                  {type.includes('image') ? (
                    <>
                      {url && (
                        <Image
                          className="nut-uploader-preview-img-c"
                          style={{ objectFit: 'fill' }}
                          src={url}
                          alt=""
                          onClick={() => handleItemClick(item, index)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {previewUrl ? (
                        <Image
                          className="nut-uploader-preview-img-c"
                          src={previewUrl}
                          alt=""
                          onClick={() => handleItemClick(item, index)}
                        />
                      ) : (
                        <div className="nut-uploader-preview-img-file">
                          <div
                            onClick={() => handleItemClick(item, index)}
                            className="nut-uploader-preview-img-file-name"
                          >
                            <LinkIcon color="#808080" />
                            <span>&nbsp;{name}</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {status === 'success' && name ? (
                    <div className="tips">{name}</div>
                  ) : null}
                </div>
              )}

              {previewType === 'list' && (
                <div className="nut-uploader-preview-list">
                  <div
                    className={`nut-uploader-preview-img-file-name ${status}`}
                    onClick={() => handleItemClick(item, index)}
                  >
                    <LinkIcon />
                    <span>&nbsp;{name}</span>
                  </div>
                  {deletable && (
                    <Del
                      color="#808080"
                      className="nut-uploader-preview-img-file-del"
                      onClick={() => onDeleteItem(item, index)}
                    />
                  )}

                  {item.status === 'uploading' && item.percentage && (
                    <Progress
                      percent={item.percentage}
                      color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
                      showText={false}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}
    </>
  )
}
