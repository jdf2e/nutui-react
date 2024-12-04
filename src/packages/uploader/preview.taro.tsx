import React from 'react'
import {
  Del,
  Failure,
  Link as LinkIcon,
  Loading,
} from '@nutui/icons-react-taro'
import { View } from '@tarojs/components'
import { FileItem } from '../uploader'
import { Image } from '@/packages/image/image.taro'
import { Progress } from '../progress/progress.taro'

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
            <View className={`nut-uploader-preview ${previewType}`} key={uid}>
              {previewType === 'picture' && !children && deletable && (
                <View
                  onClick={() => onDeleteItem(item, index)}
                  className="close"
                >
                  {deleteIcon}
                </View>
              )}
              {previewType === 'picture' && !children && (
                <View className="nut-uploader-preview-img">
                  {status === 'ready' ? (
                    <View className="nut-uploader-preview-progress">
                      <View className="nut-uploader-preview-progress-msg">
                        {message}
                      </View>
                    </View>
                  ) : (
                    status !== 'success' && (
                      <View
                        className="nut-uploader-preview-progress"
                        style={{ zIndex: 10 }}
                      >
                        {renderIcon(item)}
                        <View className="nut-uploader-preview-progress-msg">
                          {message}
                        </View>
                      </View>
                    )
                  )}

                  {type.includes('image') ? (
                    <>
                      {url && (
                        <Image
                          className="nut-uploader-preview-img-c"
                          src={url}
                          mode="aspectFill"
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
                          onClick={() => handleItemClick(item, index)}
                        />
                      ) : (
                        <View className="nut-uploader-preview-img-file">
                          <View
                            onClick={() => handleItemClick(item, index)}
                            className="nut-uploader-preview-img-file-name"
                          >
                            <LinkIcon color="#808080" />
                            <span>&nbsp;{name}</span>
                          </View>
                        </View>
                      )}
                    </>
                  )}
                  {status === 'success' && name ? (
                    <View className="tips">{name}</View>
                  ) : null}
                </View>
              )}

              {previewType === 'list' && (
                <View className="nut-uploader-preview-list">
                  <View
                    className={`nut-uploader-preview-img-file-name ${status}`}
                    onClick={() => handleItemClick(item, index)}
                  >
                    <LinkIcon />
                    <span
                      className={`nut-uploader-preview-img-file-name ${status}`}
                    >
                      &nbsp;{name}
                    </span>
                  </View>
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
                </View>
              )}
            </View>
          )
        })}
    </>
  )
}
