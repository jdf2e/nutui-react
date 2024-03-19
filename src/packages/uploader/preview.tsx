import React from 'react'
import { Del, Failure, Link as LinkIcon, Loading } from '@nutui/icons-react'
import Progress from '@/packages/progress'
import { FileItem } from '@/packages/uploader/file-item'
import { ERROR } from '@/packages/uploader/utils'

export const Preview: React.FunctionComponent<any> = ({
  fileList,
  previewType,
  deletable,
  onDeleteItem,
  handleItemClick,
  previewUrl,
  children,
}) => {
  const renderIcon = (item: FileItem) => {
    if (item.status === ERROR) {
      return item.failIcon || <Failure color="#fff" />
    }
    return (
      item.loadingIcon || <Loading className="nut-icon-loading" color="#fff" />
    )
  }
  return (
    <>
      {fileList.length !== 0 &&
        fileList.map((item: any, index: number) => {
          return (
            <div
              className={`nut-uploader-preview ${previewType}`}
              key={item.uid}
            >
              {previewType === 'picture' && !children && deletable && (
                <Failure
                  color="rgba(0,0,0,0.6)"
                  className="close"
                  onClick={() => onDeleteItem(item, index)}
                />
              )}
              {previewType === 'picture' && !children && (
                <div className="nut-uploader-preview-img">
                  {item.status === 'ready' ? (
                    <div className="nut-uploader-preview-progress">
                      <div className="nut-uploader-preview-progress-msg">
                        {item.message}
                      </div>
                    </div>
                  ) : (
                    item.status !== 'success' && (
                      <div className="nut-uploader-preview-progress">
                        {renderIcon(item)}
                        <div className="nut-uploader-preview-progress-msg">
                          {item.message}
                        </div>
                      </div>
                    )
                  )}

                  {item.type?.includes('image') ? (
                    <>
                      {item.url && (
                        <img
                          className="nut-uploader-preview-img-c"
                          style={{ objectFit: 'fill' }}
                          src={item.url}
                          alt=""
                          onClick={() => handleItemClick(item, index)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {previewUrl ? (
                        <img
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
                            <span>&nbsp;{item.name}</span>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {item.status === 'success' ? (
                    <div className="tips">{item.name}</div>
                  ) : null}
                </div>
              )}

              {previewType === 'list' && (
                <div className="nut-uploader-preview-list">
                  <div
                    className={`nut-uploader-preview-img-file-name ${item.status}`}
                    onClick={() => handleItemClick(item, index)}
                  >
                    <LinkIcon />
                    <span>&nbsp;{item.name}</span>
                  </div>
                  {deletable && (
                    <Del
                      color="#808080"
                      className="nut-uploader-preview-img-file-del"
                      onClick={() => onDeleteItem(item, index)}
                    />
                  )}

                  {item.status === 'uploading' && (
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
