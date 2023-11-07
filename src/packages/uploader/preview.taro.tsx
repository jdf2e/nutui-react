import React from 'react'
import {
  Del,
  Failure,
  Link as LinkIcon,
  Loading,
} from '@nutui/icons-react-taro'
import { Image } from '@tarojs/components'
import Progress from '@/packages/progress/index.taro'
import { FileItem } from '@/packages/uploader/file-item'
import { ERROR } from '@/packages/uploader/upload'

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
              className={`nut-uploader__preview ${previewType}`}
              key={item.uid}
            >
              {previewType === 'picture' && deletable && (
                <Failure
                  color="rgba(0,0,0,0.6)"
                  className="close"
                  onClick={() => onDeleteItem(item, index)}
                />
              )}
              {previewType === 'picture' && !children && (
                <div className="nut-uploader__preview-img">
                  {item.status === 'ready' ? (
                    <div className="nut-uploader__preview__progress">
                      <div className="nut-uploader__preview__progress__msg">
                        {item.message}
                      </div>
                    </div>
                  ) : (
                    item.status !== 'success' && (
                      <div className="nut-uploader__preview__progress">
                        {renderIcon(item)}
                        <div className="nut-uploader__preview__progress__msg">
                          {item.message}
                        </div>
                      </div>
                    )
                  )}
                  {item.type?.includes('image') ? (
                    <>
                      {item.url && (
                        <Image
                          className="nut-uploader__preview-img__c"
                          style={{ objectFit: 'fill' }}
                          mode="aspectFit"
                          src={item.url}
                          onClick={() => handleItemClick(item, index)}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      {previewUrl ? (
                        <Image
                          className="nut-uploader__preview-img__c"
                          mode="aspectFit"
                          src={previewUrl}
                          onClick={() => handleItemClick(item, index)}
                        />
                      ) : (
                        <div className="nut-uploader__preview-img__file">
                          <div
                            onClick={() => handleItemClick(item, index)}
                            className="nut-uploader__preview-img__file__name"
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
                <div className="nut-uploader__preview-list">
                  <div
                    className={`nut-uploader__preview-img__file__name ${item.status}`}
                    onClick={() => handleItemClick(item, index)}
                  >
                    <LinkIcon />
                    <span>&nbsp;{item.name}</span>
                  </div>
                  {deletable && (
                    <Del
                      color="#808080"
                      className="nut-uploader__preview-img__file__del"
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
